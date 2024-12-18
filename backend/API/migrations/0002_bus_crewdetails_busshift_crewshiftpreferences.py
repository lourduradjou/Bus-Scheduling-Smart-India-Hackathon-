# Generated by Django 5.1.1 on 2024-09-22 07:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='CrewDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('age', models.IntegerField()),
                ('role', models.CharField(max_length=20)),
                ('present', models.BooleanField()),
            ],
            options={
                'constraints': [models.CheckConstraint(condition=models.Q(('age__gte', 18)), name='age_gte_18')],
            },
        ),
        migrations.CreateModel(
            name='BusShift',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shift_start', models.DateTimeField()),
                ('shift_end', models.DateTimeField()),
                ('bus', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='API.bus')),
                ('crew', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.crewdetails')),
            ],
        ),
        migrations.CreateModel(
            name='CrewShiftPreferences',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preferred_shift_start', models.DateTimeField()),
                ('preferred_shift_end', models.DateTimeField()),
                ('crew', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='API.crewdetails')),
            ],
        ),
    ]
