<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusToCategoryAndSubcategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->boolean('status_category')->default('0');
        });
        Schema::table('subcategories', function (Blueprint $table) {
            $table->boolean('status_subcategory')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->boolean('status_category')->default('0');
        });
        Schema::table('subcategories', function (Blueprint $table) {
            $table->boolean('status_subcategory')->default('0');
        });
    }
}
