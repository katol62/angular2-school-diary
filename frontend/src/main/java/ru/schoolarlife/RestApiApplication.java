package ru.schoolarlife;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication(scanBasePackages={"ru.schoolarlife"})// same as @Configuration @EnableAutoConfiguration @ComponentScan combined
public class RestApiApplication {

	public static void main(String[] args) throws Exception
	{
		SpringApplication.run(RestApiApplication.class, args);
	}
}
