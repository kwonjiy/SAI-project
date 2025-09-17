package app.sai.user.service;

import app.sai.user.api.dto.*;
import app.sai.user.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repo;

    @Transactional
    public UserRes create(UserCreateReq req) {
        if (repo.existsByEmail(req.email())) throw new IllegalArgumentException("이미 사용 중인 이메일");
        User u = User.builder()
                .name(req.name())
                .email(req.email())
                .role(req.role())
                .active(true)
                .build();
        return toRes(repo.save(u));
    }

    @Transactional(readOnly = true)
    public List<UserRes> list() {
        return repo.findAll().stream().map(this::toRes).toList();
    }

    @Transactional(readOnly = true)
    public UserRes get(Long id) {
        return repo.findById(id).map(this::toRes).orElseThrow();
    }

    @Transactional
    public UserRes update(Long id, UserUpdateReq req) {
        User u = repo.findById(id).orElseThrow();
        if (req.name() != null)  u.setName(req.name());
        if (req.email()!= null)  u.setEmail(req.email());
        if (req.role() != null)  u.setRole(req.role());
        if (req.active()!= null) u.setActive(req.active());
        return toRes(u); // dirty checking
    }

    @Transactional
    public void delete(Long id) {
        repo.deleteById(id);
    }

    private UserRes toRes(User u) {
        return new UserRes(u.getId(), u.getName(), u.getEmail(), u.getRole(), u.getActive());
    }
}
