package ru.schoolarlife.config;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Created by victor on 01.11.16.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;

    /*private final DataSource dataSource;

    @Autowired
    public WebSecurityConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }*/



    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .userDetailsService(userDetailsService);

//        auth.jdbcAuthentication().dataSource(dataSource)
//                .usersByUsernameQuery("select email, password, active from user where email=?")
//                .authoritiesByUsernameQuery("select name from role where id in (select role_id from user_role where user_id in (select id from user where email=?))");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        /*http
                .authorizeRequests()
                .antMatchers("/resources*//**", "/security/register", "/test").permitAll()
                .antMatchers("/main").access("hasRole('ROLE_PARENT')").anyRequest().permitAll()
                .and()
                .formLogin().loginPage("/security/login").usernameParameter("email").passwordParameter("password")
                .and()
                .logout().logoutSuccessUrl("/security/login?logout")
                .and()
                .exceptionHandling().accessDeniedPage("/security/403")
                .and()
                .csrf();*/
        http
                .authorizeRequests()
                .antMatchers("/resources/**",
                        "/security/register",
                        "/security/activation",
                        "/security/registerconfirm",
                        "/",
                        "/main",
                        "/person/addprofile",
                        "/uploadFile",
                        "/ajaxtest",
                        "/ajax",
                        "/jqtest",
                        "/file-upload",
                        "/upload",
                        "/upfile",
                        "/uploadjsp",
                        "/uploadfjsp",
                        "/test").permitAll()
                .antMatchers("/admin").access("hasRole('ADMIN')").anyRequest().permitAll()
                .and()
                .formLogin().loginPage("/security/login").usernameParameter("email").passwordParameter("password")
                .permitAll()
                .and()
                .logout().logoutSuccessUrl("/security/login?logout")
                .permitAll();
    }

   /* @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }*/
}
