import 'package:awrasapp/screen/root/signin.dart';
import 'package:awrasapp/screen/root/signup.dart';
import 'package:awrasapp/screen/root/splash_screen.dart';
import 'package:awrasapp/screen/user/home_page.dart';
import 'package:awrasapp/screen/user/course_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: '/splash',
      routes: {
        '/splash': (context) => SplashScreen(),
        '/signin': (context) => SignInScreen(),
        '/signup': (context) => SignUpScreen(),
        '/home': (context) => HomePage(),
        '/courses': (context) => CoursePage(),
      },
    );
  }
}
