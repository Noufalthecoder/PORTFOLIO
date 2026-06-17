# Generates placeholder assets until user adds their own files.
# Skips files that already exist.

Add-Type -AssemblyName System.Drawing

$base = Split-Path -Parent $PSScriptRoot
$root = Join-Path $base "src\assets"

$dirs = @(
  "intro",
  "profile",
  "resume",
  "projects",
  "beyond-code",
  "achievements"
)

foreach ($d in $dirs) {
  $path = Join-Path $root $d
  if (-not (Test-Path $path)) { New-Item -ItemType Directory -Path $path -Force | Out-Null }
}

function New-PlaceholderImage($path, $width, $height, $r, $g, $b, $label) {
  if (Test-Path $path) { return }
  $bmp = New-Object System.Drawing.Bitmap $width, $height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.Color]::FromArgb($r, $g, $b))
  $font = New-Object System.Drawing.Font("Segoe UI", [Math]::Max(14, [int]($width / 30)), [System.Drawing.FontStyle]::Bold)
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 255, 255, 255))
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF(0, 0, $width, $height)
  $g.DrawString($label, $font, $brush, $rect, $sf)
  $g.Dispose()
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "Created $path"
}

New-PlaceholderImage (Join-Path $root "intro\hero.png") 1920 1080 8 20 14 "Replace with your hero image"
New-PlaceholderImage (Join-Path $root "profile\profile.png") 800 1000 12 28 20 "Replace with profile photo"

$projects = @(
  @{ name = "sentinelvision.png"; label = "SentinelVision AI" },
  @{ name = "layoutos.png"; label = "LAYOUT.OS" },
  @{ name = "aquapercent.png"; label = "AquaPercent AI" },
  @{ name = "sentinelx.png"; label = "SentinelX" }
)
foreach ($p in $projects) {
  New-PlaceholderImage (Join-Path $root "projects\$($p.name)") 1200 675 10 24 18 $p.label
}

for ($i = 1; $i -le 3; $i++) {
  New-PlaceholderImage (Join-Path $root "achievements\ach$i.png") 800 600 14 32 24 "Achievement $i"
}

for ($i = 1; $i -le 6; $i++) {
  New-PlaceholderImage (Join-Path $root "beyond-code\beyond$i.png") 600 (400 + ($i * 40)) 10 26 18 "Beyond Code $i"
}

$resumePath = Join-Path $root "resume\resume.pdf"
if (-not (Test-Path $resumePath)) {
  # Minimal valid PDF
  @"
%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length 44>>stream
BT /F1 24 Tf 72 720 Td (Mohammed Noufal V - Resume) Tj ET
endstream endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000370 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
449
%%EOF
"@ | Set-Content -Path $resumePath -Encoding ASCII
  Write-Host "Created $resumePath"
}

Write-Host "Asset generation complete."
