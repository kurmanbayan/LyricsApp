# Generated by Django 2.0.4 on 2018-04-17 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_recipe_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='voted',
            field=models.IntegerField(default=0),
        ),
    ]