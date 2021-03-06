package ru.schoolarlife;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.schoolarlife.logic.bo.security.Role;
import ru.schoolarlife.logic.bo.security.User;
import ru.schoolarlife.logic.model.dao.repositories.security.RoleRepository;
import ru.schoolarlife.logic.model.dao.repositories.security.UserRepository;
import ru.schoolarlife.logic.util.enums.EnUserRole;

import javax.annotation.PostConstruct;
import java.util.HashSet;


@SpringBootApplication//(scanBasePackages={"ru.schoolarlife"})// same as @Configuration @EnableAutoConfiguration @ComponentScan combined
public class RestApiApplication {

	public static final Logger logger = LoggerFactory.getLogger(RestApiApplication.class);

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	public static void main(String[] args) throws Exception
	{
		SpringApplication.run(RestApiApplication.class, args);
	}

	public @PostConstruct void init()
    {
        //Check and prepare admin user on start
		logger.debug("Trying to get ADMIN user");
		User user = userRepository.findByEmail("master@schoolarlife.ru");
		if(user == null)
		{
			logger.debug("Failed to get user with email: master@schoolarlife.ru");
			logger.debug("Trying to add user: master@schoolarlife.ru");
			user = new User("master");
			user.setEmail("master@schoolarlife.ru");
			user.setPassword("demo1234");
			user.setPasswordConfirm("demo1234");
			user.setActive(true);
			user.setPrimeRole(EnUserRole.ROLE_GLOGAL_ADMIN);

			Role role = roleRepository.findByName("ROLE_ADMIN");
			if(role == null) {
				role = new Role();
				role.setName("ROLE_ADMIN");
				roleRepository.save(role);
			}
			HashSet<Role> roles = new HashSet<Role>();
			roles.add(role);
			user.setRoles(roles);
			userRepository.save(user);
		}
    }
}
