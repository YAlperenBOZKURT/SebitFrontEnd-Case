
## Getting Started

To run the project on your local machine, follow the steps below.

### Step 1: Installing Required Packages
Open the terminal and navigate to the project folder. Then, use the following command to install the necessary packages:
```bash
npm install
```

### Step 2: Starting the Application
Use the following command to start the application:
```bash
ng serve
```

### Step 3: Starting the JSON Server
To start the JSON Server, use the following command:
```bash
json-server --watch api/db.json
```

After completing these steps, open your browser and navigate to `localhost:4200` to access the application.

---

## Homepage

On the application's homepage, category titles, contents, and icons are listed, pulled from the JSON Server. Clicking on a category redirects you to a page displaying articles belonging to that category.

---

## Category

On the category page, articles belonging to the selected category are sorted using a custom sorting method based on their publication dates. The top of the page displays category information along with the number of articles in that category. Articles are listed in the desired format, containing a maximum of 280 characters. To view the full article, click on the title or the "Read More" link.

---

## Article Detail

The article detail page presents the article's title, content, and publication date in the desired format.

---

## Search Results

When searching for text that appears in the title or description, all articles containing that text are listed on this page. Click on the article title or the "Read More" link to access the full content. Additionally, search results are sorted by date, displaying the most recent articles first.

---

## Additional Features

During the development of the application, the following additional features have been implemented:

- **Login Screen:** Access the login screen by clicking on the top-right button. When logging in, error messages are displayed if the correct format for the email and password is not followed. After a successful login, the information is stored in the local storage, allowing you to continue browsing without having to log in again.

- **Sign Up Screen:** Access the sign-up screen through the "Sign Up" option on the login screen. Error messages are displayed if the data is not entered in the correct format. The entered email address is checked against the database, and if it already exists, the registration process is blocked.

- **After User Login - My Post Page:** After logging in, the login button disappears, and the "Logout" and "My Post" buttons appear. Clicking on the "My Post" button displays articles associated with the user's membership using local storage. The "Add New Post" button can be used to create a new article.

---

This project was developed using Angular Material and Bootstrap CSS Frameworks. You can watch a short video showcasing the features by following this link: [Video Link](https://www.youtube.com/watch?v=vHHgBMAdYqE)

---
