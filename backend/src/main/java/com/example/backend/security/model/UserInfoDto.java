package com.example.backend.security.model;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {

    private String id;
    private String userName;
    private List <String> roles;
    private List<String> favoriteSightsIds;

}
