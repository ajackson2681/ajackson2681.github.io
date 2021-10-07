/**
 * MIT License
 * Copyright (c) 2021 Adam Jackson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy 
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights 
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell    
 * copies of the Software, and to permit persons to whom the Software is        
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
 const board = [
    // 20x20 board
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    
    // 25x20 board
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    // 40x30 board
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    // 40x40 board (standard)
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

let canvas;
let ctx;
let fps = 5;
let now;
let then = Date.now();
let interval = 1000/fps;
let delta;
let score = 0;

const blockWidth = 15;

const colors = [
    "red",
    "#00ff00",
];

const borderColors = {
    "red": "#800000",
    "green": "#008000",
};

const directions = {
    STATIONARY: 0, // starting position
    UP: 1,
    RIGHT: 2,   
    DOWN: 3,
    LEFT: 4
}

// This prevents you from being able to do something like move up,
// hit right, then hit down right away to end the game.
let canChangeDirection = true; 

let curDirection = directions.STATIONARY;

const food = [
    Math.floor(Math.random()*board.length), 
    Math.floor(Math.random()*board[0].length)
];

// random starting position
const snake = [
    [
        Math.floor(Math.random()*board.length), 
        Math.floor(Math.random()*board[0].length)
    ]
];

/**
 * clears the board, will get re-drawn using the new positions of the snake 
 * and the food piece
 */
function clearBoard() {
    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length; row++) {
            board[row][col] = 0;
        }
    }
}

/**
 * Moves the snake forward by popping off the tail, and unshifting a new tuple
 * on to the head. The tuple is created depending on the direction the snake is
 * travelling. If it is travelling up/down, it will increment or decrement index
 * 0 of the tuple, if it is travelling left/right, it will increment index 1 of
 * the tuple. 
 */
function updateSnake() {
    if (curDirection !== directions.STATIONARY) {
        const tail = snake.pop();
        
        let row = snake.length === 0 ? tail[0] : snake[0][0];
        let col = snake.length === 0 ? tail[1] : snake[0][1]; 

        switch (curDirection) {
            case directions.DOWN:
                row = (row + 1) % board.length;
                break;
            case directions.UP:
                row = row - 1 >= 0 ? row - 1 : board.length - 1;
                break;
            case directions.RIGHT:
                col = (col + 1) % board[0].length;
                break;
            case directions.LEFT:
                col = col - 1 >= 0 ? col - 1 : board[0].length - 1;
                break;
        }

        snake.unshift([row,col]);

        canChangeDirection = true;
    }   
}

/**
 * This function ensures that the food piece will never be generated under the 
 * snake. It will attempt to keep generating new numbers until one works.
 */
function generateNewFood() {
    let row = Math.floor(Math.random() * board.length);
    let col = Math.floor(Math.random() * board[0].length);
    let goodPos = false;

    while (!goodPos) {
        goodPos = true; // assume we've found a good position

        for (let i = 0; i < snake.length; i++) {
            if (snake[i][0] === row && snake[i][1] === col) {
                row = Math.floor(Math.random() * board.length);
                col = Math.floor(Math.random() * board[0].length);
                goodPos = false; // change it if we're wrong
            }
        }
    }

    food[0] = row;
    food[1] = col;
}

/**
 * Collision checking, for both the snake with itself, as well as with the food.
 * 
 * @returns 1 if the snake has collided with itself, 0 otherwise
 */
function checkForCollision() {
    const head = snake[0];

    // start at index 1 so the head doesn't compare to itself
    for (let i = 1; i < snake.length; i++) {
        // if the head collides with any part of the body, the game is over.
        if (snake[i][0] === head[0] && snake[i][1] === head[1]) {
            curDirection = directions.STATIONARY;
            window.onkeydown = null; // detaches controls

            ctx.save();
            ctx.font = "100px Arial";
            ctx.fillStyle = "goldenrod";
            ctx.fillText(`You lose!`, 75, 300);
            ctx.restore();

            // after 5 seconds, reloads the page to start another game.
            setTimeout(() => {
                location.reload();
            }, 5000);
            return 1;
        }
    }
    
    // if the snake's head matches the position of the food, the snake eats it
    // and adds one extra block to its body. Then generates new food.
    if (head[0] === food[0] && head[1] === food[1]) {
        generateNewFood();
        score++;
        // doesn't matter what gets pushed here, since the next tick where the
        // snake moves will pop it anyway.
        snake.push([]); 
    }

    return 0;
}

/**
 * Updates the board after being cleared.
 * 
 * @returns 1 if the game is over (if checkForCollistion returns 1)
 */
function updateBoard() {
    if (checkForCollision()) {
        return 1;
    }

    updateSnake();
    board[food[0]][food[1]] = 2;

    for (let i = 0; i < snake.length; i++) {
        board[snake[i][0]][snake[i][1]] = 1;
    }
    
    return 0;
}

/**
 * Main drawing function, iterates through the 2d board array and paints the 
 * correct color blocks on the canvas based on the number that is in each index.
 */
function drawBoard() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for (let col = 0; col < board[0].length; col++) {
        for (let row = 0; row < board.length; row++) {
            switch (board[row][col]) {
                case 0:
                    ctx.save();
                    ctx.fillStyle = "black";
                    ctx.fillRect(blockWidth*col, blockWidth*row, blockWidth, blockWidth);
                    ctx.restore();
                    break;
                case 1:
                    ctx.save();
                    ctx.fillStyle = colors[0];
                    ctx.strokeStyle = borderColors[colors[0]];
                    ctx.fillRect(blockWidth*col, blockWidth*row, blockWidth, blockWidth);
                    ctx.strokeRect(blockWidth*col, blockWidth*row, blockWidth, blockWidth);
                    ctx.restore();
                    break;   
                case 2:
                    ctx.save();
                    ctx.fillStyle = colors[1];
                    ctx.strokeStyle = borderColors[colors[1]];
                    ctx.fillRect(blockWidth*col, blockWidth*row, blockWidth, blockWidth);
                    ctx.strokeRect(blockWidth*col, blockWidth*row, blockWidth, blockWidth);
                    ctx.restore();
                    break;
            }
        }
    }

    ctx.save();
    ctx.font = "40px Arial";
    ctx.fillText(`Score: ${score}`, blockWidth*board[0].length + 10, 40, 170);
    ctx.restore();
}

/**
 * Main animation loop
 * @returns null
 */
function animationLoop() {
    now = Date.now();
    delta = now - then;

    if (delta > interval) {
        clearBoard();
        if (updateBoard()) {
            return;
        }
        drawBoard();

        // handles adjusting the framerate
        then = now - (delta % interval); 
        interval = 1000/fps;
    }
    
    window.requestAnimationFrame(animationLoop);
}

function attachControls() {
    window.onkeydown = (evt) => {
        if (!canChangeDirection) {
            return;
        }

        switch (evt.code) {
            case "ArrowLeft":
                if (curDirection !== directions.RIGHT) {
                    curDirection = directions.LEFT;
                }
                break;
            case "ArrowRight":
                if (curDirection !== directions.LEFT) {
                    curDirection = directions.RIGHT;
                }
                break;
            case "ArrowUp":
                if (curDirection !== directions.DOWN) {
                    curDirection = directions.UP;
                }
                break;
            case "ArrowDown":
                if (curDirection !== directions.UP) {
                    curDirection = directions.DOWN;
                }
                break;
        }

        canChangeDirection = false;
    }
}

window.onload = () => {
    canvas = document.getElementById("snake");
    ctx = canvas.getContext("2d");
    canvas.height = blockWidth*board.length;
    canvas.width = blockWidth*board[0].length + 200;
    attachControls();
    window.requestAnimationFrame(animationLoop);
}