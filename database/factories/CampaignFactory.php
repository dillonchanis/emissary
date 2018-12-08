<?php

use Faker\Generator as Faker;

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'subject' => $faker->sentence,
        'body' => $faker->paragraphs,
        'send_on' => $faker->dateTime,
    ];
});
