
book = {}
while(1):
    name = input("请输入名字： ")
    price = int(input("请输入存取金额： "))
    print(book.get(name))
    if book.get(name) == None:
        book[name] = []

    book[name].append(price)

    mybook = book[name]
    total = 0
    for p in mybook:
        total += p
    print(total)


def test(werwqer):
    print(werwqer)


test()
