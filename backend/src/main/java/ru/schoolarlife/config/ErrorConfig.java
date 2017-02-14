package ru.schoolarlife.config;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

/**
 * Created by victor on 22.11.16.
 */
@Configuration
public class ErrorConfig  implements EmbeddedServletContainerCustomizer {
    @Override
    public void customize(ConfigurableEmbeddedServletContainer container) {
        container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/error/404"));
        container.addErrorPages(new ErrorPage(HttpStatus.FORBIDDEN, "/error/403"));
        container.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error/500"));
    }
}
