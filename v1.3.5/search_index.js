var documenterSearchIndex = {"docs":
[{"location":"reference/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"reference/#Basics","page":"API Reference","title":"Basics","text":"","category":"section"},{"location":"reference/","page":"API Reference","title":"API Reference","text":"Figgy.FigSource\nFiggy.load\nFiggy.NamedSource\nFiggy.ObjectSource\nFiggy.Fig\nFiggy.Store\nFiggy.load!\nFiggy.kmap\nFiggy.select","category":"page"},{"location":"reference/#Builtin-Configuration-Sources","page":"API Reference","title":"Builtin Configuration Sources","text":"","category":"section"},{"location":"reference/","page":"API Reference","title":"API Reference","text":"Figgy.ProgramArguments\nFiggy.EnvironmentVariables\nFiggy.IniFile\nFiggy.JsonObject\nFiggy.XmlObject\nFiggy.TomlObject","category":"page"},{"location":"#CloudBase.jl-Documentation","page":"Home","title":"CloudBase.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"GitHub Repo: https://github.com/JuliaServices/CloudBase.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Welcome to CloudBase.jl! A simple, yet comprehensive foundation for interacting with common cloud providers in Julia (GCP, Azure, AWS).","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install CloudBase by typing the following in the Julia REPL:","category":"page"},{"location":"","page":"Home","title":"Home","text":"] add CloudBase ","category":"page"},{"location":"","page":"Home","title":"Home","text":"followed by ","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CloudBase","category":"page"},{"location":"","page":"Home","title":"Home","text":"to load the package.","category":"page"},{"location":"#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The CloudBase.jl package provides a set of foundational functionality for interacting with the most common cloud providers (GCP, Azure, and AWS). It specifically aims to do the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Handle common credential scenarios, including the following in order of precedence:\nAllow manually provided credentials by user\nLoading credentials from cloud-idiomatic environment variables\nLoading credentials from cloud-idiomatic config/credential files\nInspecting current host environment for additional credential options (EC2, ECS task, etc.)\nHandles automatic refresh attempts of credentials when they are close to expiring\nProvides custom HTTP.jl clients that includes layers to set appropriate default keyword arguments for specific cloud configurations and handles request \"signing\" according to cloud-specific algorithms","category":"page"},{"location":"","page":"Home","title":"Home","text":"The package specifically does not aim to do any of the following:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Cloud-specific error handling/parsing for specific codes/problems\nURL/header/query parameter/request body validation of arguments for specific cloud service operations","category":"page"},{"location":"","page":"Home","title":"Home","text":"The core of the package then, is in 3 non-exported modules (that you can import yourself if so desired):","category":"page"},{"location":"","page":"Home","title":"Home","text":"CloudBase.AWS: provides AWS.get, AWS.put, AWS.post, AWS.request etc. as wrappers to corresponding HTTP methods\nCloudBase.Azure: provides Azure.get, Azure.put, Azure.post, Azure.request etc. as wrappers to corresponding HTTP methods\nCloudBase.GCP: provides GCP.get, GCP.put, GCP.post, GCP.request etc. as wrappers to corresponding HTTP methods","category":"page"},{"location":"","page":"Home","title":"Home","text":"That means using this packages behavior is basically like dropping in a cloud-specific module call in place of where you would have been calling HTTP.jl, like:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import CloudBase: AWS\n\nfunction get_file(url, creds)\n    # previously tried to do manual header auth signing manually or something and then call HTTP.get\n    # now can just call AWS.get w/ creds and it will do the request signing automatically\n    # right before the request is sent on the wire\n    return AWS.get(url; service=\"S3\", region=\"us-west-1\", access_key_id=creds.id, secret_access_key=creds.secret)\nend","category":"page"}]
}
