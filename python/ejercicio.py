def funcion_a():
    x = 10

    def funcion_b():
        
        x = 20
        print("funcion_b", x)

    funcion_b()
    print("funcion_a", x)


funcion_a()
