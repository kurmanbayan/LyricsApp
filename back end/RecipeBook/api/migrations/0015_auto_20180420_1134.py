# Generated by Django 2.0.4 on 2018-04-20 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20180420_1106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=5),
        ),
    ]
