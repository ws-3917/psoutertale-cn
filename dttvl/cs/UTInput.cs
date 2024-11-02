using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Experimental.Input;
using UnityEngine.Experimental.Input.LowLevel;

public class UTInput : MonoBehaviour
{
	private static float xAxis = 0f;

	private static float yAxis = 0f;

	private static int z = 0;

	private static bool zHold = false;

	private static int x = 0;

	private static bool xHold = false;

	private static int c = 0;

	private static bool cHold = false;

	private static float joystickActiveZone = 0.5f;

	public static bool joystickIsActive = false;

	public static bool touchpadIsActive = false;

	private static Dictionary<string, Key> keys = new Dictionary<string, Key>();

	private static Dictionary<string, GamepadButton> buttons = new Dictionary<string, GamepadButton>();

	public static string[] controlNames = new string[7] { "Up", "Down", "Left", "Right", "Z", "X", "C" };

	public static string[] inputNames = new string[7] { "Up", "Down", "Left", "Right", "Confirm", "Cancel", "Menu" };

	public static string[] defaultKeyNames = new string[7] { "UpArrow", "DownArrow", "LeftArrow", "RightArrow", "Z", "X", "C" };

	public static string[] defaultButtonNames = new string[7] { "DpadUp", "DpadDown", "DpadLeft", "DpadRight", "South", "East", "North" };

	private static bool frameButtonPress = false;

	private static bool useInputPriority = true;

	private void Awake()
	{
		if (PlayerPrefs.GetInt("NewInput") == 0)
		{
			FirstTimeSetupNewInput();
			PlayerPrefs.SetInt("NewInput", 1);
		}
		LoadInputsFromConfig(UnityEngine.Object.FindObjectOfType<GameManager>().config);
	}

	private void FixedUpdate()
	{
		if (frameButtonPress)
		{
			z = 0;
			x = 0;
			c = 0;
			frameButtonPress = false;
		}
		if (Gamepad.current != null)
		{
			if (Keyboard.current != null && Keyboard.current.anyKey.isPressed)
			{
				joystickIsActive = false;
			}
			string[] array = inputNames;
			foreach (string key in array)
			{
				if (Gamepad.current[buttons[key]].wasPressedThisFrame)
				{
					joystickIsActive = true;
					touchpadIsActive = false;
					break;
				}
			}
		}
		else
		{
			joystickIsActive = false;
		}
	}

	private static float GetPriorityAxis(string name)
	{
		bool flag = false;
		if (name == "Vertical")
		{
			if (joystickIsActive && Gamepad.current != null)
			{
				if (Gamepad.current[buttons["Up"]].isPressed || Gamepad.current.leftStick.y.ReadValue() >= joystickActiveZone)
				{
					return 1f;
				}
				if (Gamepad.current[buttons["Down"]].isPressed || Gamepad.current.leftStick.y.ReadValue() <= 0f - joystickActiveZone)
				{
					return -1f;
				}
				return 0f;
			}
			if (Keyboard.current != null)
			{
				if (Keyboard.current[keys["Up"]].isPressed || (flag && Keyboard.current.upArrowKey.isPressed))
				{
					return 1f;
				}
				if (Keyboard.current[keys["Down"]].isPressed || (flag && Keyboard.current.downArrowKey.isPressed))
				{
					return -1f;
				}
				return 0f;
			}
		}
		if (name == "Horizontal")
		{
			if (joystickIsActive && Gamepad.current != null)
			{
				if (Gamepad.current[buttons["Right"]].isPressed || Gamepad.current.leftStick.x.ReadValue() >= joystickActiveZone)
				{
					return 1f;
				}
				if (Gamepad.current[buttons["Left"]].isPressed || Gamepad.current.leftStick.x.ReadValue() <= 0f - joystickActiveZone)
				{
					return -1f;
				}
				return 0f;
			}
			if (Keyboard.current != null)
			{
				if (Keyboard.current[keys["Right"]].isPressed || (flag && Keyboard.current.rightArrowKey.isPressed))
				{
					return 1f;
				}
				if (Keyboard.current[keys["Left"]].isPressed || (flag && Keyboard.current.leftArrowKey.isPressed))
				{
					return -1f;
				}
				return 0f;
			}
		}
		return 0f;
	}

	public static float GetAxisRaw(string name)
	{
		if (Application.isFocused)
		{
			if (useInputPriority)
			{
				return GetPriorityAxis(name);
			}
			if (name == "Vertical")
			{
				if (joystickIsActive && Gamepad.current != null)
				{
					int num = 0;
					if (Gamepad.current[buttons["Up"]].isPressed || Gamepad.current.leftStick.y.ReadValue() >= joystickActiveZone)
					{
						num++;
					}
					if (Gamepad.current[buttons["Down"]].isPressed || Gamepad.current.leftStick.y.ReadValue() <= 0f - joystickActiveZone)
					{
						num--;
					}
					return num;
				}
				if (Keyboard.current != null)
				{
					int num2 = 0;
					if (Keyboard.current[keys["Up"]].isPressed)
					{
						num2++;
					}
					if (Keyboard.current[keys["Down"]].isPressed)
					{
						num2--;
					}
					return num2;
				}
			}
			if (name == "Horizontal")
			{
				if (joystickIsActive && Gamepad.current != null)
				{
					int num3 = 0;
					if (Gamepad.current[buttons["Right"]].isPressed || Gamepad.current.leftStick.x.ReadValue() >= joystickActiveZone)
					{
						num3++;
					}
					if (Gamepad.current[buttons["Left"]].isPressed || Gamepad.current.leftStick.x.ReadValue() <= 0f - joystickActiveZone)
					{
						num3--;
					}
					return num3;
				}
				if (Keyboard.current != null)
				{
					int num4 = 0;
					if (Keyboard.current[keys["Right"]].isPressed)
					{
						num4++;
					}
					if (Keyboard.current[keys["Left"]].isPressed)
					{
						num4--;
					}
					return num4;
				}
			}
		}
		return 0f;
	}

	public static float GetAxis(string name)
	{
		return GetAxisRaw(name);
	}

	public static bool GetButtonDown(string button)
	{
		if (!Application.isFocused)
		{
			return false;
		}
		bool flag = false;
		if (button == "Z")
		{
			button = "Confirm";
		}
		if (button == "X")
		{
			button = "Cancel";
		}
		if (button == "C")
		{
			button = "Menu";
		}
		if (joystickIsActive && Gamepad.current != null)
		{
			flag = Gamepad.current[buttons[button]].wasPressedThisFrame;
		}
		else if (Keyboard.current != null)
		{
			flag = Keyboard.current[keys[button]].wasPressedThisFrame;
		}
		if (!flag && Keyboard.current != null)
		{
			Key[] altKeys = GetAltKeys(button);
			foreach (Key key in altKeys)
			{
				if (key != 0 && Keyboard.current[key].wasPressedThisFrame)
				{
					flag = true;
				}
			}
		}
		return flag;
	}

	public static bool GetButtonUp(string button)
	{
		if (!Application.isFocused)
		{
			return false;
		}
		bool flag = false;
		if (button == "Z")
		{
			button = "Confirm";
		}
		if (button == "X")
		{
			button = "Cancel";
		}
		if (button == "C")
		{
			button = "Menu";
		}
		if (joystickIsActive && Gamepad.current != null)
		{
			flag = Gamepad.current[buttons[button]].wasReleasedThisFrame;
		}
		else if (Keyboard.current != null)
		{
			flag = Keyboard.current[keys[button]].wasReleasedThisFrame;
		}
		if (!flag && Keyboard.current != null)
		{
			Key[] altKeys = GetAltKeys(button);
			foreach (Key key in altKeys)
			{
				if (key != 0 && Keyboard.current[key].wasReleasedThisFrame)
				{
					flag = true;
				}
			}
		}
		return flag;
	}

	public static bool GetButton(string button)
	{
		if (!Application.isFocused)
		{
			return false;
		}
		bool flag = false;
		if (button == "Z")
		{
			button = "Confirm";
		}
		if (button == "X")
		{
			button = "Cancel";
		}
		if (button == "C")
		{
			button = "Menu";
		}
		if (joystickIsActive && Gamepad.current != null)
		{
			flag = Gamepad.current[buttons[button]].isPressed;
		}
		else if (Keyboard.current != null)
		{
			flag = Keyboard.current[keys[button]].isPressed;
		}
		if (!flag && Keyboard.current != null)
		{
			Key[] altKeys = GetAltKeys(button);
			foreach (Key key in altKeys)
			{
				if (key != 0 && Keyboard.current[key].isPressed)
				{
					flag = true;
				}
			}
		}
		return flag;
	}

	public static string GetKeyName(string input)
	{
		if (input == "Z")
		{
			input = "Confirm";
		}
		if (input == "X")
		{
			input = "Cancel";
		}
		if (input == "C")
		{
			input = "Menu";
		}
		if (touchpadIsActive)
		{
			switch (input)
			{
			case "Confirm":
				return "Z";
			case "Cancel":
				return "X";
			case "Menu":
				return "C";
			default:
				return input;
			}
		}
		if (keys.ContainsKey(input))
		{
			string text = keys[input].ToString();
			text = text.Replace("Arrow", "");
			text = text.Replace("Alpha", "");
			text = text.Replace("Keypad", "Numpad");
			if (Keyboard.current != null && text.Length == 1 && text.ToUpper()[0] >= 'A' && text.ToUpper()[0] <= 'Z')
			{
				text = Keyboard.current[text.ToLower()].displayName.ToUpper();
			}
			return text;
		}
		return "INVALID INPUT";
	}

	public static string GetButtonName(string input)
	{
		if (input == "Z")
		{
			input = "Confirm";
		}
		if (input == "X")
		{
			input = "Cancel";
		}
		if (input == "C")
		{
			input = "Menu";
		}
		if (buttons.ContainsKey(input))
		{
			return buttons[input].ToString();
		}
		return "INVALID INPUT";
	}

	public static void BindKey(string input, Key key)
	{
		Config config = UnityEngine.Object.FindObjectOfType<GameManager>().config;
		Key key2 = Key.None;
		string[] array = inputNames;
		foreach (string text in array)
		{
			if (input == text)
			{
				key2 = GetKey(text);
				SetKey(text, key);
				break;
			}
		}
		array = inputNames;
		foreach (string text2 in array)
		{
			if (GetKey(text2) == key && input != text2)
			{
				SetKey(text2, key2);
				break;
			}
		}
		SaveInputsToConfig(config);
		config.Write();
	}

	public static void BindButton(string input, GamepadButton buttonInput)
	{
		Config config = UnityEngine.Object.FindObjectOfType<GameManager>().config;
		string[] array = inputNames;
		foreach (string text in array)
		{
			if (input == text)
			{
				GetBoundButton(text);
				SetBoundButton(text, buttonInput);
				break;
			}
		}
		array = inputNames;
		foreach (string text2 in array)
		{
			if (GetBoundButton(text2) == buttonInput && input != text2)
			{
				SetBoundButton(text2, buttonInput);
				break;
			}
		}
		SaveInputsToConfig(config);
		config.Write();
	}

	public static void ResetKeys()
	{
		Config config = UnityEngine.Object.FindObjectOfType<GameManager>().config;
		keys = new Dictionary<string, Key>
		{
			{
				"Up",
				Key.UpArrow
			},
			{
				"Down",
				Key.DownArrow
			},
			{
				"Left",
				Key.LeftArrow
			},
			{
				"Right",
				Key.RightArrow
			},
			{
				"Confirm",
				Key.Z
			},
			{
				"Cancel",
				Key.X
			},
			{
				"Menu",
				Key.C
			}
		};
		buttons = new Dictionary<string, GamepadButton>
		{
			{
				"Up",
				GamepadButton.DpadUp
			},
			{
				"Down",
				GamepadButton.DpadDown
			},
			{
				"Left",
				GamepadButton.DpadLeft
			},
			{
				"Right",
				GamepadButton.DpadRight
			},
			{
				"Confirm",
				GamepadButton.South
			},
			{
				"Cancel",
				GamepadButton.East
			},
			{
				"Menu",
				GamepadButton.North
			}
		};
		SaveInputsToConfig(config);
		config.Write();
	}

	private static void SetKey(string input, Key key)
	{
		keys[input] = key;
	}

	private static Key GetKey(string input)
	{
		return keys[input];
	}

	private static void SetBoundButton(string input, GamepadButton button)
	{
		buttons[input] = button;
	}

	private static GamepadButton GetBoundButton(string input)
	{
		return buttons[input];
	}

	private static void LoadInputsFromConfig(Config c)
	{
		c.Read();
		for (int i = 0; i < inputNames.Length; i++)
		{
			string @string = c.GetString("Keyboard Controls", inputNames[i], defaultKeyNames[i]);
			try
			{
				keys[inputNames[i]] = (Key)Enum.Parse(typeof(Key), @string);
			}
			catch
			{
				keys[inputNames[i]] = (Key)Enum.Parse(typeof(Key), defaultKeyNames[i], ignoreCase: true);
			}
			int @int = c.GetInt("Gamepad Controls", inputNames[i], (int)Enum.Parse(typeof(GamepadButton), defaultButtonNames[i]), writeIfNotExist: true);
			buttons[inputNames[i]] = (GamepadButton)@int;
		}
		c.Write();
	}

	private static void SaveInputsToConfig(Config c)
	{
		for (int i = 0; i < inputNames.Length; i++)
		{
			c.SetString("Keyboard Controls", inputNames[i], keys[inputNames[i]].ToString());
			c.SetInt("Gamepad Controls", inputNames[i], (int)buttons[inputNames[i]]);
		}
		c.Write();
	}

	public static string GetKeyOrButtonReplacement(string name)
	{
		if (!joystickIsActive)
		{
			return "[" + GetKeyName(name) + "]";
		}
		return ButtonPrompts.GetButtonChar(GetButtonName(name));
	}

	private static Key[] GetAltKeys(string inputName)
	{
		switch (inputName)
		{
		case "Confirm":
			return new Key[1] { Key.Enter };
		case "Cancel":
			return new Key[2]
			{
				Key.LeftShift,
				Key.RightShift
			};
		case "Menu":
			return new Key[2]
			{
				Key.LeftCtrl,
				Key.RightCtrl
			};
		default:
			return new Key[1];
		}
	}

	private static void FirstTimeSetupNewInput()
	{
		Config config = UnityEngine.Object.FindObjectOfType<GameManager>().config;
		List<string> list = new List<string>();
		List<string> list2 = new List<string>();
		for (int i = 0; i < inputNames.Length; i++)
		{
			string text = KeyCodeToNewInput(config, inputNames[i]);
			if (text != "null")
			{
				list.Add(text);
			}
			else
			{
				list.Add(defaultKeyNames[i]);
			}
			string text2 = ButtonToNewInput(config, inputNames[i]);
			if (text2 != "null")
			{
				list2.Add(text2);
			}
			else
			{
				list2.Add(defaultButtonNames[i]);
			}
		}
		config.ResetCategory("Keyboard Controls");
		config.ResetCategory("Gamepad Controls");
		for (int j = 0; j < inputNames.Length; j++)
		{
			config.SetString("Keyboard Controls", inputNames[j], list[j]);
			config.SetInt("Gamepad Controls", inputNames[j], (int)Enum.Parse(typeof(GamepadButton), list2[j]));
		}
		config.Write();
	}

	private static string KeyCodeToNewInput(Config c, string inputName)
	{
		string @string = c.GetString("Keyboard Controls", inputName, "null");
		@string.Replace("Control", "Ctrl");
		@string.Replace("Return", "Enter");
		@string.Replace("Keypad", "Numpad");
		@string.Replace("Alpha", "Digit");
		@string.Replace("BackQuote", "Backquote");
		try
		{
			Enum.Parse(typeof(Key), @string);
			return @string;
		}
		catch
		{
			Debug.Log("a key failed to parse");
			return "null";
		}
	}

	private static string ButtonToNewInput(Config c, string inputName)
	{
		string @string = c.GetString("Gamepad Controls", inputName, "null");
		Dictionary<string, string> dictionary = new Dictionary<string, string>
		{
			{ "JoystickButton0", "South" },
			{ "JoystickButton1", "East" },
			{ "JoystickButton2", "West" },
			{ "JoystickButton3", "North" },
			{ "JoystickButton4", "LeftShoulder" },
			{ "JoystickButton5", "RightShoulder" },
			{ "JoystickButton6", "Select" },
			{ "JoystickButton7", "Start" }
		};
		if (@string.Contains("Vertical"))
		{
			switch (c.GetInt("Gamepad Controls", inputName + "Code", 0))
			{
			case 1:
				return "DpadUp";
			case -1:
				return "DpadDown";
			}
		}
		else if (@string.Contains("Horizontal"))
		{
			switch (c.GetInt("Gamepad Controls", inputName + "Code", 0))
			{
			case 1:
				return "DpadRight";
			case -1:
				return "DpadLeft";
			}
		}
		if (dictionary.ContainsKey(@string))
		{
			Debug.Log("found a replacement for " + @string);
			return dictionary[@string];
		}
		try
		{
			Enum.Parse(typeof(GamepadButton), @string);
			return @string;
		}
		catch
		{
			Debug.Log("a button failed to parse");
			return "null";
		}
	}

	public static List<Key> GetValidKeyInputs()
	{
		List<Key> list = new List<Key>();
		for (int i = 0; i < 10; i++)
		{
			list.Add((Key)Enum.Parse(typeof(Key), "Digit" + i));
			list.Add((Key)Enum.Parse(typeof(Key), "Numpad" + i));
		}
		for (int j = 15; j <= 40; j++)
		{
			list.Add((Key)j);
		}
		list.Add(Key.Insert);
		list.Add(Key.Delete);
		for (int k = 61; k <= 64; k++)
		{
			list.Add((Key)k);
		}
		return list;
	}

	public static void DebugPrintGamepadEnum()
	{
		string text = "";
		GamepadButton[] array = (GamepadButton[])Enum.GetValues(typeof(GamepadButton));
		for (int i = 0; i < array.Length; i++)
		{
			GamepadButton gamepadButton = array[i];
			text = text + gamepadButton.ToString() + " " + (int)gamepadButton + "\n";
		}
		MonoBehaviour.print(text);
	}

	public static void DebugPrintJoystickState()
	{
		MonoBehaviour.print(Gamepad.current.leftStick.ReadValue());
	}

	public static void SetValue(string input, bool value, bool pos, bool diag, bool left)
	{
		if (input == "Horizontal")
		{
			xAxis = 0f;
			if (value && pos)
			{
				xAxis += 1f;
			}
			if (value && !pos)
			{
				xAxis -= 1f;
			}
		}
		if (input == "Vertical")
		{
			yAxis = 0f;
			if (value && pos)
			{
				yAxis += 1f;
			}
			if (value && !pos)
			{
				yAxis -= 1f;
			}
		}
		if (diag)
		{
			xAxis = 0f;
			if (value && !left)
			{
				xAxis += 1f;
			}
			if (value && left)
			{
				xAxis -= 1f;
			}
		}
		if (input == "Z")
		{
			if (value)
			{
				z = 1;
			}
			else
			{
				z = 2;
			}
			zHold = value;
		}
		if (input == "X")
		{
			if (value)
			{
				x = 1;
			}
			else
			{
				x = 2;
			}
			xHold = value;
		}
		if (input == "C")
		{
			if (value)
			{
				c = 1;
			}
			else
			{
				c = 2;
			}
			cHold = value;
		}
		touchpadIsActive = zHold || xHold || cHold || xAxis != 0f || yAxis != 0f;
		if (touchpadIsActive)
		{
			joystickIsActive = false;
		}
	}

	public static void SetPriority(bool b)
	{
		useInputPriority = b;
	}
}

