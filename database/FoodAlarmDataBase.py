import sqlite3
import requests


url = 'https://www.ah.nl/gql'
headers = {
  'client-name': 'ah-allerhande',
  'client-version': '1.757.0-pr-869-build-2479',
}




def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
   
    conn = sqlite3.connect(db_file)
    return conn
    


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    
    c = conn.cursor()
    c.execute(create_table_sql)
    

def create_recipe(conn, recipe):
    """
    Create a new task
    :param conn:
    :param task:
    :return:
    """

    sql = ''' INSERT OR IGNORE INTO recipes (recipe_ID, recipe_name, recipe_serving, recipe_instructions)
              VALUES(?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, recipe)
    conn.commit()

    return cur.lastrowid

def create_ingredient(conn, ingredient):
    """
    Create a new task
    :param conn:
    :param task:
    :return:
    """

    sql = ''' INSERT OR IGNORE INTO ingredients (ingredient_ID, ingredient_name)
              VALUES(?,?) '''
    cur = conn.cursor()
    cur.execute(sql, ingredient)
    conn.commit()

    return cur.lastrowid

def create_recipe_ingredient(conn, recipe_ingredient):
    """
    Create a new task
    :param conn:
    :param task:
    :return:
    """

    sql = ''' INSERT OR IGNORE INTO recipes_ingredients (fk_recipe, fk_ingredient, quantity, quantity_unit)
              VALUES(?,?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, recipe_ingredient)
    conn.commit()

    return cur.lastrowid

def select_name_recipes(conn):
    """
    Query all rows in the tasks table
    :param conn: the Connection object
    :return:
    """
    cur = conn.cursor()
    cur.execute("SELECT recipe_name FROM recipes")

    rows = cur.fetchall()

    for row in rows:
        print(row)



def main():

    

    database = r"C:\Users\20211775\Documents\FoodAlarm\database\foodalarm.db"

    sql_create_recipes_table = """ CREATE TABLE IF NOT EXISTS recipes (
                                        recipe_ID integer not null,
                                        recipe_name text not null,
                                        recipe_serving integer,
                                        recipe_instructions text,
                                        constraint pk_recipe primary key (recipe_id) 
                                    ); """

    sql_create_ingredients_table = """ CREATE TABLE IF NOT EXISTS ingredients (
                                        ingredient_ID integer not null,
                                        ingredient_name text not null,
                                        constraint pk_ingredient primary key (ingredient_id)
                                    ); """

    sql_create_recipes_ingredients_table = """ CREATE TABLE IF NOT EXISTS recipes_ingredients (
                                        fk_recipe integer not null,
                                        fk_ingredient integer not null,
                                        quantity integer,
                                        quantity_unit text,
                                        primary key (fk_ingredient, fk_recipe)
                                    ); """

     # create a database connection
    conn = create_connection(database)

    # create tables
    if conn is not None:
        # create projects table
        create_table(conn, sql_create_recipes_table)

         # create projects table
        create_table(conn, sql_create_ingredients_table)

         # create projects table
        create_table(conn, sql_create_recipes_ingredients_table)

      
    else:
        print("Error! cannot create the database connection.")

    

    for id in range(454190, 454200):
     payload = {
     'operationName': "recipe",
     'query': 'query recipe($id: Int!) {\n  recipe(id: $id) {\n    ...recipe\n    __typename\n  }\n}\n\nfragment recipe on Recipe {\n  id\n  title\n  alternateTitle\n  slugifiedTitle\n  courses\n  modifiedAt\n  publishedAt\n  nutritions {\n    ...recipeNutritionInfo\n    __typename\n  }\n  cookTime\n  ovenTime\n  waitTime\n  servings {\n    isChangeable\n    max\n    min\n    scale\n    type\n    number\n    __typename\n  }\n  rating {\n    average\n    count\n    __typename\n  }\n  images(\n    renditions: [D220X162, D302X220, D440X324, D612X450, D1024X748, D1224X900]\n  ) {\n    url\n    width\n    height\n    rendition\n    __typename\n  }\n  preparation {\n    steps\n    summary\n    __typename\n  }\n  videos {\n    preparation {\n      ...recipeVideo\n      __typename\n    }\n    tips {\n      ...recipeVideo\n      __typename\n    }\n    __typename\n  }\n  spiciness\n  magazines {\n    number\n    date\n    title\n    issueSlug\n    type\n    __typename\n  }\n  description\n  tags {\n    key\n    value\n    __typename\n  }\n  ingredients {\n    id\n    name {\n      plural\n      singular\n      __typename\n    }\n    quantity\n    quantityUnit {\n      plural\n      singular\n      __typename\n    }\n    servingsScale\n    text\n    __typename\n  }\n  kitchenAppliances {\n    quantity\n    name\n    scalable\n    __typename\n  }\n  tips {\n    value\n    type\n    __typename\n  }\n  href\n  classifications\n  meta {\n    description\n    title\n    __typename\n  }\n  cuisines\n  nutriScore\n  __typename\n}\n\nfragment recipeNutritionInfo on RecipeNutritionInfo {\n  carbohydrates {\n    ...recipeNutrition\n    __typename\n  }\n  energy {\n    ...recipeNutrition\n    __typename\n  }\n  fat {\n    ...recipeNutrition\n    __typename\n  }\n  fibers {\n    ...recipeNutrition\n    __typename\n  }\n  protein {\n    ...recipeNutrition\n    __typename\n  }\n  saturatedFat {\n    ...recipeNutrition\n    __typename\n  }\n  sodium {\n    ...recipeNutrition\n    __typename\n  }\n  sugar {\n    ...recipeNutrition\n    __typename\n  }\n  __typename\n}\n\nfragment recipeNutrition on RecipeNutrition {\n  name\n  unit\n  value\n  __typename\n}\n\nfragment recipeVideo on RecipeVideo {\n  id\n  category\n  title\n  slug\n  duration\n  description\n  descriptionHtml\n  publication\n  views\n  images {\n    ...recipeVideoImages\n    __typename\n  }\n  streams {\n    ...recipeVideoStreams\n    __typename\n  }\n  __typename\n}\n\nfragment recipeVideoImages on RecipeVideoImages {\n  sd\n  thumbnail\n  __typename\n}\n\nfragment recipeVideoStreams on RecipeVideoStreams {\n  sd\n  hd\n  __typename\n}',
     'variables': {
     'id': id,
                  }
              }

     response = requests.get(url, json=payload, headers=headers)
     data = response.json()
   

     if data['data']['recipe'] != None:
         recipe_id = data['data']['recipe']['id']
         recipe_name = data['data']['recipe']['title']
         recipe_serving = data['data']['recipe']['servings']['number']
         recipe_preparation = data['data']['recipe']['preparation']['summary']

         recipe_preparation_str = ''

         for i in recipe_preparation:
             recipe_preparation_str = recipe_preparation_str + i
         
         recipe = (recipe_id, recipe_name, recipe_serving, recipe_preparation_str)

         create_recipe(conn, recipe)
    

         for i in data['data']['recipe']['ingredients']:

             ingredient_id = i['id']
             ingredient_name = i['name']['singular']
             ingredient_quantity = i['quantity']
             ingredient_quantity_unit = i['quantityUnit']['singular']

             ingredient = (ingredient_id, ingredient_name)
             create_ingredient(conn, ingredient)

             recipe_ingredient = (recipe_id, ingredient_id, ingredient_quantity, ingredient_quantity_unit)
             create_recipe_ingredient(conn, recipe_ingredient)
    
   

    
    
                                    

if __name__ == '__main__':
    main()