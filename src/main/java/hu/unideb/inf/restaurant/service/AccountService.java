package hu.unideb.inf.restaurant.service;

import hu.unideb.inf.restaurant.data.AccountDto;
import hu.unideb.inf.restaurant.entity.Account;
import hu.unideb.inf.restaurant.entity.Restaurant;
import hu.unideb.inf.restaurant.mapper.AccountMapper;
import hu.unideb.inf.restaurant.repository.AccountRepository;
import hu.unideb.inf.restaurant.repository.RestaurantRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;
    private final AccountMapper accountMapper;
    private final RestaurantRepository restaurantRepository;

    public AccountDto getAccountNameAndFavorites() {
        Optional<Account> account = getAccount();
        List<Integer> favorites;
        return account.map(accountMapper::accountToAccountDto).orElse(null);
    }

    public void addRestaurantToFavorites(Integer restaurantId) {
        Optional<Account> account = getAccount();
        Restaurant restaurant = restaurantRepository.getRestaurantById(restaurantId);
        account.ifPresent(value -> {
            value.getFavorites().add(restaurant);
            accountRepository.save(account.get());
        });
    }

    private Optional<Account> getAccount() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication.isAuthenticated()) {
            return accountRepository.findAccountByUsername(authentication.getName());
        }
        else return Optional.empty();
    }
}
