https://www.youtube.com/watch?v=iI5h4-pChho&t=234

[client] is contained in the main app folder
one method to setup React app is to run "create-react-app" from wuthin the [client] folder,
in order to setup a standard React App and its basic dependencies.

[Application Main Folder]

--[client]

----[src]
------App.js		: defines the main structure with a NavBar, a Modal (interactive panel to insert data) and a userslist. does not contains any method and require reactstrap
------store.js		:
------index.js		:	

------[actions]
--------types.js	: defines the type of performing action (GET POST DELETE LOADING) gotta insert an UPDATE element 
--------userActions.js	: contains the actual methods getUser(), addUser(), deleteUser(), and setUserLoading(). the actions on db are performed with axios  

------[components]
--------AppNavbar.js	: is a pure reactstrap navbar and contains 2 event handlers, onClick and isOpen which controls a toggler. (opens when closed and closes when opened)
--------UserModal.js	: modal is a dropdown panel, contains the field to fill with new user data and a submit button. There are 3 methods. onChange, onSubmit and toggle 
--------UsersList.js	: is the physical place where useres are listed, is called by App.js, it ioos located under the NavBar and has an onDelete method to remove users from the list itself

------[reducers]
--------index.js	: refer to redux dox
--------userReducer.js	: state handler, refer to redux documentation. it is a bit complicated but pretty useful (RTFM!!!)
