<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category')->insert([
            [
                'name' => 'Programming',
                'status' => 'active',
            ],
            [
                'name' => 'Design',
                'status' => 'active',
            ],
            [
                'name' => 'Networking',
                'status' => 'active',
            ],
            [
                'name' => 'Database',
                'status' => 'active',
            ],
            [
                'name' => 'Security',
                'status' => 'active',
            ],
            [
                'name' => 'Operating System',
                'status' => 'active',
            ],
            [
                'name' => 'Hardware',
                'status' => 'active',
            ],
            [
                'name' => 'Software',
                'status' => 'active',
            ],
            [
                'name' => 'Mobile',
                'status' => 'active',
            ],
            [
                'name' => 'Web Development',
                'status' => 'active',
            ],
            [
                'name' => 'Artificial Intelligence',
                'status' => 'active',
            ],
            [
                'name' => 'Machine Learning',
                'status' => 'active',
            ],
            [
                'name' => 'Deep Learning',
                'status' => 'active',
            ],
            [
                'name' => 'Internet of Things',
                'status' => 'active',
            ],
            [
                'name' => 'Cloud Computing',
                'status' => 'active',
            ],
            [
                'name' => 'Big Data',
                'status' => 'active',
            ],
            [
                'name' => 'Data Science',
                'status' => 'active',
            ],
            [
                'name' => 'Cyber Security',
                'status' => 'active',
            ],
            [
                'name' => 'Ethical Hacking',
                'status' => 'active',
            ],
            [
                'name' => 'Penetration Testing',
                'status' => 'active',
            ],
            [
                'name' => 'Forensic',
                'status' => 'active',
            ],
            [
                'name' => 'Cryptography',
                'status' => 'active',
            ],   
    ]);
    }
}
