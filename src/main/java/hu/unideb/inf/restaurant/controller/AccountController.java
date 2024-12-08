package hu.unideb.inf.restaurant.controller;

import hu.unideb.inf.restaurant.data.AccountDto;
import hu.unideb.inf.restaurant.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/account")
@AllArgsConstructor
public class AccountController {
    private final AccountService accountService;

    @GetMapping("/favorites")
    public ResponseEntity<AccountDto> getAccountNameAndFavorites() {
        return ResponseEntity.ok(accountService.getAccountNameAndFavorites());
    }

    @PostMapping("/favorites")
    public void addRestaurantToFavorites(@RequestParam Integer restaurantId) {
        accountService.addRestaurantToFavorites(restaurantId);
    }
}
