package ru.schoolarlife.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import ru.schoolarlife.security.TokenAuthenticationEntryPoint;
import ru.schoolarlife.security.TokenAuthenticationFilter;
import ru.schoolarlife.security.TokenAuthenticationProvider;

import javax.servlet.Filter;

/**
 * Created by victor on 22.04.17.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                //.authorizeRequests().antMatchers("/api/auth/login").permitAll()
                //.and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .httpBasic().disable()
                .formLogin().disable()
                .csrf().disable()
                .addFilterBefore(tokenAuthenticationFilter(authenticationManager()), BasicAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user").password("password").roles("USER")
                .and()
                .withUser("admin").password("adminPassword").roles("USER", "ADMIN");
        auth.authenticationProvider(tokenAuthenticationProvider(auth.getDefaultUserDetailsService()));
    }

    @Bean
    public AuthenticationEntryPoint tokenAuthenticationEntryPoint() {
        return new TokenAuthenticationEntryPoint();
    }

    @Bean
    public AuthenticationProvider tokenAuthenticationProvider(UserDetailsService userDetailsService) {
        return new TokenAuthenticationProvider(userDetailsService);
    }

    @Bean
    public Filter tokenAuthenticationFilter(AuthenticationManager authenticationManager) {
        return new TokenAuthenticationFilter(authenticationManager);
    }
}
