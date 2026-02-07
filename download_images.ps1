$userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
$targetDir = "public\assets\royal-eight"

if (!(Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir
}

$images = @(
    @{ Name = "peking-duck.jpg"; Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/115_245_577Quanjudeducksserved.jpg/800px-115_245_577Quanjudeducksserved.jpg" },
    @{ Name = "dim-sum.jpg"; Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Three_dim_sum_in_steamer_basket.jpg/800px-Three_dim_sum_in_steamer_basket.jpg" },
    @{ Name = "tea-ceremony.jpg"; Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tea_ceremony.jpg/800px-Tea_ceremony.jpg" },
    @{ Name = "abalone.jpg"; Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Korean_grilled_abalone-Jeonbok_gui-01.jpg/800px-Korean_grilled_abalone-Jeonbok_gui-01.jpg" },
    @{ Name = "banquet.jpg"; Url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chinese_banquet_in_a_banquet_hall.JPG/800px-Chinese_banquet_in_a_banquet_hall.JPG" },
    @{ Name = "hero-ambience.jpg"; Url = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" }
)

foreach ($img in $images) {
    $outFile = Join-Path $targetDir $img.Name
    Write-Host "Downloading $($img.Name)..."
    try {
        Invoke-WebRequest -Uri $img.Url -OutFile $outFile -UserAgent $userAgent
        Write-Host "Success."
    } catch {
        Write-Error "Failed to download $($img.Name): $_"
    }
}
