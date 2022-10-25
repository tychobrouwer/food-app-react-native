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

def select_recipes(conn):
    """
    Query based on ingredient --> use name as one 'product' can have multiple IDS
    """
    cur = conn.cursor()
    cur.execute("""
                SELECT recipes.recipe_ID, recipes.recipe_name, ingredients.ingredient_ID, ingredients.ingredient_name
                FROM recipes_ingredients
                JOIN ingredients ON recipes_ingredients.fk_ingredient = ingredients.ingredient_ID
                JOIN recipes ON recipes_ingredients.fk_recipe = recipes.recipe_ID
                WHERE ingredients.ingredient_name = 'zout' """)

    rows = cur.fetchall()

    for row in rows:
        print(row)

def main():

    

    database = r"C:\Users\20211775\Documents\FoodAlarm\database\foodalarm.db"

     # create a database connection
    conn = create_connection(database)

    # create tables
    if conn is not None:
        # create projects table
        #create_table(conn, sql_create_recipes_table)

         # create projects table
        # create_table(conn, sql_create_ingredients_table)

         # create projects table
        #create_table(conn, sql_create_recipes_ingredients_table)

        select_recipes(conn)

      
    else:
        print("Error! cannot create the database connection.")




    
    
                                    

if __name__ == '__main__':
    main()