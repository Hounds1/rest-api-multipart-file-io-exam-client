package file.io.exam.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientMainController {

    @GetMapping("/client/main")
    public String mainPage() {
        return "/main";
    }
}
