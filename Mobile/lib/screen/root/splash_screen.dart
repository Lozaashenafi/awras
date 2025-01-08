import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:awrasapp/screen/root/signin.dart'; // Import your SignInScreen here

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    // Navigate to the SignInScreen after a delay of 3 seconds
    _navigateToSignIn();
  }

  void _navigateToSignIn() {
    Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => const SignInScreen(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: const Color.fromARGB(255, 21, 83, 134), // Blue background
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Logo
              Image.asset(
                'assets/images/awrasWhite.png', // Replace with your logo's path
                height: 150, // Adjust size as needed
              ),
              const SizedBox(height: 30), // Space between logo and loading
              // Loading Indicator
              const CircularProgressIndicator(
                color: Colors.white, // White loading indicator
              ),
              const SizedBox(height: 20), // Space between loading and text
              const Text(
                'Loading...',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
