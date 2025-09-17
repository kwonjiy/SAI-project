package app.sai.user.api;

import app.sai.user.api.dto.*;
import app.sai.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    public UserRes create(@RequestBody @Valid UserCreateReq req) {
        return service.create(req);
    }

    @GetMapping
    public List<UserRes> list() {
        return service.list();
    }

    @GetMapping("/{id}")
    public UserRes get(@PathVariable Long id) {
        return service.get(id);
    }

    @PatchMapping("/{id}")
    public UserRes update(@PathVariable Long id, @RequestBody UserUpdateReq req) {
        return service.update(id, req);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
