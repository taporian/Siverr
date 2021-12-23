<?php

namespace Tests\Unit;

use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_login()
    {
       $response = $this->post('api/users/login',
       [  "email"=> "chris@mail.com",
    "password"=>"1!Cc2345678"  ]);
       $response->assertJsonFragment([ "email"=> "chris@mail.com"]);
    }
    public function test_login_error()
    {
        $response = $this->post('api/users/login',
            [  "email"=> "chris@mail.com",
                "password"=>"!Cc2345678"  ]);
        $response->assertJsonFragment([ "error"=> "Unauthorized"]);
    }

}
