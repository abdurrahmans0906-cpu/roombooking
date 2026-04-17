pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build & Test') {
            steps {
                echo 'Running Maven Build and JUnit Tests...'
                // This uses the 'mvn' command from your Windows System PATH
                bat 'mvn clean test' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
                bat 'if not exist C:\\RoomBooking_Deploy mkdir C:\\RoomBooking_Deploy'
                bat 'xcopy /y /s * C:\\RoomBooking_Deploy\\'
            }
        }
    }
}
