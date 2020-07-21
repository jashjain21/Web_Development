def new_decorator(func):

    def wrap_func():
        print('CODE HERE  BEFORE EXECTUNG FUNC')
        func()
        print("FUNC HAS BEEN CALLED")

    return wrap_func


@new_decorator
def func_need_decorator():
    print("THIS FUNCTION NEEDS A DECORATOR")

# func_need_decorator=new_decorator(func_need_decorator)
func_need_decorator()
