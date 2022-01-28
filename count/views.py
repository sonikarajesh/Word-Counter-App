from django.shortcuts import render




def count(request):
    return render(request, 'index.html')