      $("form").on("submit", e => {
        e.preventDefault();
        const email = $("#email")
          .val()
          .trim();
        const firstName = $("#firstName")
          .val()
          .trim();
        const text = $("#message")
          .val()
          .trim();
        const data = {
          email,
          firstName,
          text
        };
        $.post("/contact", data)
          .then(() => {
            window.location.href = "/confirmation";
          })
          .catch(() => {
            window.location.href = "/error";
          });
      });
