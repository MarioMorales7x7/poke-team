# Generated by Django 4.0.4 on 2022-04-22 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('poke_app', '0003_alter_pokemonteam_user_delete_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pokemonteam',
            old_name='user',
            new_name='creator',
        ),
    ]
