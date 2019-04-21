package com.benbobis.employeemanagerreactpoc.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Configuration
@EnableGlobalMethodSecurity(
        securedEnabled = true,
        prePostEnabled = true,
        jsr250Enabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .oauth2ResourceServer().jwt()
                .jwtAuthenticationConverter(grantedAuthoritiesExtractor());
    }

    Converter<Jwt, AbstractAuthenticationToken> grantedAuthoritiesExtractor() {
        return new GrantedAuthoritiesExtractor();
    }

    @SuppressWarnings("unchecked")
    static class GrantedAuthoritiesExtractor extends JwtAuthenticationConverter {
        protected Collection<GrantedAuthority> extractAuthorities(Jwt jwt) {
            Collection<String> groupsClaim = (Collection<String>)
                    jwt.getClaims().get("groups");

            Collection<String> scopesClaim = (Collection<String>)
                    jwt.getClaims().get("scp");

            return Stream.concat(groupsClaim.stream(), scopesClaim.stream())
                    .map(s -> "ROLE_" + s)
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());
        }
    }
}
