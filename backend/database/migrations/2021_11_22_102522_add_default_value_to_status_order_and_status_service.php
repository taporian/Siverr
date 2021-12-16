<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDefaultValueToStatusOrderAndStatusService extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('status_order')->default('0')->change();
        });
        Schema::table('services', function (Blueprint $table) {
            $table->string('status_service')->default('0')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('status_order')->default('0')->change();
        });
        Schema::table('services', function (Blueprint $table) {
            $table->string('status_service')->default('0')->change();
        });
    }
}
