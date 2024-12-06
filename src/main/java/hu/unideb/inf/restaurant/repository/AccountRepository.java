package hu.unideb.inf.restaurant.repository;

import hu.unideb.inf.restaurant.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account getAccountById(Integer id);
    Account getAccountByUsername(String username);
    Optional<Account> findAccountByUsername(String username);
    //Account getAccountByEmail(String email);
}
