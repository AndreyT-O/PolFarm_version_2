<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PolFarm</title>
        <link rel="shortcut icon" href="image/header/logo.svg" type="image/svg">

        <!-- Fonts -->
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet">
    
        <!-- Style -->
    
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
        <div class="wrapper" id='wrapper'>
            @include('parts.header')
            @include('parts.befenits')
            @include('parts.about')
            @include('parts.products')
            @include('parts.delivery')
            @include('parts.call')
            @include('parts.reviews')
            @include('parts.footer')
        </div>
    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
