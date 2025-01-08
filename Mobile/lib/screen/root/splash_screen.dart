import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:awrasapp/screen/root/signin.dart'; // Import your SignInScreen here

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _navigateToSignIn();
  }

  void _navigateToSignIn() {
    Future.delayed(
      const Duration(seconds: 2), // Splash screen duration
      () {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) => const SignInScreen(),
          ),
        );
      },
    );
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
              SvgPicture.asset(
                'assets/images/awrasWhite.png', // Replace with your logo's path
                height: 100, // Adjust size as needed
              ),
              const SizedBox(height: 20), // Space between logo and loading
              // Loading Indicator
              const CircularProgressIndicator(
                color: Colors.white, // White loading indicator
              ),
            ],
          ),
        ),
      ),
    );
  }
}
