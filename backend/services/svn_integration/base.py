def get_login(username, password):
    def f(realm):
        return True, username, password, False
    return f
