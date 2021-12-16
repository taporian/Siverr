<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeProductIdToServiceIdToAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->renameColumn('status_product', 'status_service');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->renameColumn('product_id', 'service_id');
        });
        Schema::table('comments', function (Blueprint $table) {
            $table->renameColumn('product_id', 'service_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('services', function (Blueprint $table) {
            $table->renameColumn('status_product', 'status_service');
        });
        Schema::table('orders', function (Blueprint $table) {
            $table->renameColumn('product_id', 'service_id');
        });
        Schema::table('comments', function (Blueprint $table) {
            $table->renameColumn('product_id', 'service_id');
        });
    }
}
