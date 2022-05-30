from django.shortcuts import render
from django.http import HttpResponse
from .models import Pizza,Burger
# Create your views here.

def index(requset):
    ctx = {'active_link': 'index'}
    return render(requset,'food/index.html',ctx)

def pizza(request):
    pizzas = Pizza.objects.all()
    ctx = {'pizzas':pizzas, 'active_link': 'pizza'}
    return render(request,'food/pizza.html',ctx)

def burger(request):
    burgers = Burger.objects.all()
    ctx = {'burgers':burgers,'active_link': 'burger'}
    return render(request,'food/burger.html',ctx)