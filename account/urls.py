from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from .forms import LoginForm, CustomAuthenticationForm, CustomPasswordChangeForm


urlpatterns = [
    # path('login/', views.user_login, name='login'),
    path('login/', auth_views.LoginView.as_view(authentication_form=CustomAuthenticationForm), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('', views.dashboard, name='dashboard'),
    path('password_change/', auth_views.PasswordChangeView.as_view(form_class=CustomPasswordChangeForm), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),
]
