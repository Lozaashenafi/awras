import 'package:awrasapp/screen/root/signup.dart';
import 'package:awrasapp/screen/user/home_page.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:awrasapp/widget/button.dart';
import 'package:awrasapp/widget/input.dart';

class SignInScreen extends StatelessWidget {
  const SignInScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          automaticallyImplyLeading: false,
        ),
        body: Padding(
          padding: const EdgeInsets.all(20.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  width: double.infinity,
                  height: 60,
                  child: ElevatedButton.icon(
                    onPressed: () {
                      // Handle sign in with Google
                    },
                    icon: const Icon(Icons.mail,
                        color: Color.fromARGB(255, 21, 104, 172)),
                    label: const Text("Sign in with Google"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius:
                            BorderRadius.circular(8), // Less round corners
                        side: const BorderSide(
                            color: Colors.black), // Black stroke
                      ),
                      textStyle: GoogleFonts.roboto(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 20),

                // Sign in with Facebook button
                SizedBox(
                  width: double.infinity,
                  height: 60,
                  child: ElevatedButton.icon(
                    onPressed: () {
                      // Handle sign in with Facebook
                    },
                    icon: const Icon(Icons.facebook, color: Colors.blue),
                    label: const Text("Sign in with Facebook"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius:
                            BorderRadius.circular(8), // Less round corners
                        side: const BorderSide(
                            color: Colors.black), // Black stroke
                      ),
                      textStyle: GoogleFonts.lato(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 20),

                // OR separator
                Row(
                  children: const [
                    Expanded(child: Divider(thickness: 1, color: Colors.grey)),
                    Padding(
                      padding: EdgeInsets.symmetric(horizontal: 10),
                      child: Text("OR"),
                    ),
                    Expanded(child: Divider(thickness: 1, color: Colors.grey)),
                  ],
                ),
                const SizedBox(height: 20),

                // Email input
                LabelledFormInput(
                  placeholder: "enter your email",
                  keyboardType: "text",
                  controller: TextEditingController(),
                  obscureText: false,
                  label: "Email",
                ),
                const SizedBox(height: 40),
                LabelledFormInput(
                  placeholder: "enter your password",
                  keyboardType: "text",
                  controller: TextEditingController(),
                  obscureText: true,
                  label: "Password",
                ),
                const SizedBox(height: 30),

                // Sign In button
                CustomButton(
                  text: "Sign In",
                  onPressed: () {
                    // Navigate to the home screen
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(
                        builder: (context) =>
                            HomePage(), // Replace with your actual home screen
                      ),
                    );
                  },
                ),

                const SizedBox(height: 20),

                // Don't have an account text and Create Account link
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      "Don't have an account? ",
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.grey, // Gray color for the text
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        // Navigate to the SignUp screen
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const SignUpScreen()),
                        );
                      },
                      child: const Text(
                        "Create Account",
                        style: TextStyle(
                          color: Colors.blue,
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
