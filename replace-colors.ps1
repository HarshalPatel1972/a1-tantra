param()

$files = @(Get-ChildItem -Path . -Recurse -Include "*.tsx","*.ts" | Where-Object { $_.FullName -notmatch "node_modules|\.next|\.git" })

foreach ($f in $files) {
    try {
        $content = Get-Content $f.FullName -Raw
        $updated = $false
        
        if ($content -match 'text-deep-brown') {
            $content = $content -replace 'text-deep-brown\b', 'text-mystique-taupe'
            $updated = $true
        }
        if ($content -match 'bg-deep-brown') {
            $content = $content -replace 'bg-deep-brown\b', 'bg-mystique-taupe'
            $updated = $true
        }
        if ($content -match 'border-deep-brown') {
            $content = $content -replace 'border-deep-brown\b', 'border-mystique-taupe'
            $updated = $true
        }
        if ($content -match 'deep-brown/') {
            $content = $content -replace 'deep-brown/', 'mystique-taupe/'
            $updated = $true
        }
        
        if ($updated) {
            [System.IO.File]::WriteAllText($f.FullName, $content)
        }
    }
    catch {
    }
}

