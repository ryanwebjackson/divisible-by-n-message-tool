# divisible-by-n-message-tool
*Created by Ryan Jackson, 11 Feb 2015*

## Purpose
The purpose of this library is to provide a way to output messages to the console, using JavaScript, based on an array (list) of integers.  

The basic algorithm is this:  
Given a list (array) of positive integer numbers (or integer max value) 'A', and given a divisor 'N', output a message 'M' for each number in the list divisible by 'N'.  

## Goals
* The message is intially fixed, but will be configurable over time (should be logically tied to 'N').
* There should be an unlimited amount of configurable 'N'/'M' pairs.
* This tool is initially a simple script, but should be refactored into a pluggable module.
* The tool will be platform agnostic.
