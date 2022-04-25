# Generated by Django 4.0.4 on 2022-04-22 19:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('poke_app', '0004_rename_user_pokemonteam_creator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pokemonteam',
            name='creator',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='teams', to=settings.AUTH_USER_MODEL),
        ),
    ]