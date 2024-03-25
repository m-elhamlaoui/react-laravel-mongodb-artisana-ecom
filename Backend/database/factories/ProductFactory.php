<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product::class;
    public function definition(): array
    {
        $category = Category::all()->random();
        return [
        'imageUrl' => $this->faker->imageUrl(),
        'name' => $this->faker->words(2, true),
        'price' => $this->faker->randomFloat(2, 10, 100),
        'category' => $category->name,
        'description' => $this->faker->sentence(),
        'rating' => $this->faker->randomFloat(1, 1, 5),
        'reviews' => $this->faker->numberBetween(5, 50),
        'tags' => $this->faker->words($this->faker->numberBetween(1, 3)),
        'colorOptions' => $this->faker->randomElements(['red', 'blue', 'green', 'yellow'], $this->faker->numberBetween(1, 4)),
        ];
    }
}
