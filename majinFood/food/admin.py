from os import name
from django.contrib import admin
from .models import Burger, Drinks, Pizza
# Register your models here.
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')

admin.site.register(Pizza,PizzaAdmin)

class BurgerAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')

admin.site.register(Burger,BurgerAdmin)

class DrinksAdmin(admin.ModelAdmin):
    list_display = ('name', 'drice')

admin.site.register(Drinks,DrinksAdmin)