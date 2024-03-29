export interface DetailInterface {
  name: string;
}

export interface ItemMenuInterface {
  item: string;
  detail: DetailInterface[];
}

export interface SubMenuInterface {
  submenu: string;
  itemmenu: ItemMenuInterface[] | null;
}

export interface MenuInterface {
  category: string;
  submenus: SubMenuInterface[];
}
export const data = {
  menus: [
    {
      category: "pizza",
      submenus: [
        {
          submenu: "pan pizza",
          itemmenu: [
            {
              item: "classic",
              detail: [
                {
                  name: "small",
                },
                {
                  name: "medium",
                },
                {
                  name: "large",
                },
              ],
            },
            {
              item: "deluxe",
              detail: [
                {
                  name: "medium",
                },
                {
                  name: "large",
                },
              ],
            },
            {
              item: "seafood",
              detail: [
                {
                  name: "medium",
                },
                {
                  name: "large",
                },
              ],
            },
          ],
        },
        {
          submenu: "thin medium",
          itemmenu: [
            {
              item: "classic",
              detail: [
                {
                  name: "aloha",
                },
                {
                  name: "chicken caldo",
                },
                {
                  name: "double cheese",
                },
                {
                  name: "ham and crabsticks",
                },
              ],
            },
            {
              item: "vegetable",
              detail: [
                {
                  name: "island sauce",
                },
              ],
            },
            // {
            //   item: "delux",
            //   detail: [
            //     {
            //       name: "hawaiian",
            //     },
            //     {
            //       name: "italian sausage",
            //     },
            //     {
            //       name: "meat deluxe",
            //     },
            //   ],
            // },
            {
              item: "seafood",
              detail: [
                {
                  name: "seafood cocktails",
                },
                {
                  name: "tropical",
                },
              ],
            },
          ],
        },
        {
          submenu: "extra cheese sausage",
          itemmenu: [
            {
              item: "cheesy sausage bites",
              detail: [
                {
                  name: "medium aloha",
                },
                {
                  name: "medium chicken caldo",
                },
                {
                  name: "medium double cheese",
                },
              ],
            },
          ],
        },
        {
          submenu: "cheese crust sausage",
          itemmenu: [
            {
              item: "classic",
              detail: [
                {
                  name: "cheese crust medium aloha",
                },
                {
                  name: "cheese curst medium chicken caldo",
                },
                {
                  name: "double cheese",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "burger",
      submenus: [
        {
          submenu: "hot cripsy chicken",
          itemmenu: [
            {
              item: "spicy",
            },
            {
              item: "normal",
            },
          ],
        },
        {
          submenu: "chicken gangjung",
          itemmenu: null,
        },
        {
          submenu: "giant double scaled",
          itemmenu: [
            {
              item: "pork",
            },
            {
              item: "beef",
            },
          ],
        },
      ],
    },
    {
      category: "sides and snacks",
      submenus: [
        {
          submenu: "french fries",
          itemmenu: [
            {
              item: "large",
            },
            {
              item: "small",
            },
          ],
        },
        {
          submenu: "chessy potato",
          itemmenu: null,
        },
      ],
    },
    {
      category: "beverages",
      submenus: [
        {
          submenu: "cold",
          itemmenu: [
            {
              item: "pepsi",
              detail: [
                {
                  name: "small",
                },
                {
                  name: "large",
                },
              ],
            },
            {
              item: "sunkist",
              detail: [
                {
                  name: "can",
                },
                {
                  name: "cup",
                },
              ],
            },
          ],
        },
        {
          submenu: "hot",
          itemmenu: [
            {
              item: "coffee",
              detail: [
                {
                  name: "cappuccino",
                },
                {
                  name: "latte",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
